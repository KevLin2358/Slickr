class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token
    
  before_action :ensure_logged_in, only: [:create, :destroy]

  def index
    @photo = Photo.find(params[:photo_id])
    @comments = @Photos.comments
    render :index
  end

  def show 
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    @photo = Photo.find(params[:photo_id])
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def destroy
    @photo = Photo.find(params[:photo_id])
    @comment = Comment.find(params[:id])
    if @comment && @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422 
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :photo_id, :commenter_id)
  end
end