class Api::FollowsController < ApplicationController
  skip_before_action :verify_authenticity_token
    
  before_action :ensure_logged_in, only: [:create, :destroy]

  def index
    if( params[:id] )
      @follows = Follow.where(followee_id: params[:id])
    else
      @follows = Follow.all
    end
    render :index
  end

  def show 
    @follow = Follow.find(params[:id])
    render :show
  end

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 401
    end
  end

  def destroy
    @follow = Like.find(params[:id])
    if(@follow.follower_id === current_user.id)
      @follow.destroy
    end
  end


  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end

end