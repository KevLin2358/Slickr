class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token
    
  before_action :ensure_logged_in, only: [:create, :destroy]

  def index
    if( params[:id] )
      @comments = Comment.where(photo_id: params[:id])
    else
      @comments = Comment.all
    end
    render :index
  end

  def show 
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if(@comment.commenter_id === current_user.id)
      @comment.destroy
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :photo_id, :commenter_id)
  end
end