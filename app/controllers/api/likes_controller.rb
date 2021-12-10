class Api::LikesController < ApplicationController
  skip_before_action :verify_authenticity_token
    
  before_action :ensure_logged_in, only: [:create, :destroy]

  def index
    if( params[:id] )
      @likes = Like.where(photo_id: params[:id])
    else
      @likes = Like.all
    end
    render :index
  end

  def show 
    @like = Like.find(params[:id])
    render :show
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 401
    end
  end

  def destroy
    @like = Like.find(params[:id])
    if(@like.liker_id === current_user.id)
      @like.destroy
    end
  end

  private
  def like_params
    params.require(:like).permit(:liker_id, :photo_id)
  end
end