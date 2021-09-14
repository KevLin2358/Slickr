class Api::TagsController < ApplicationController
  before_action :ensure_logged_in, only: [:create]

  def index 
    @tags = Tag.all
  end

  def show
    @tag = Tag.find(params[:id])
    if @tag
      render :show
    else
      render json: @photo.errors.full_messages, status: 404
    end
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 401
    end
  end


  private
  def tag_params
    params.require(:tag).permit(:name, :photo_id)
  end
end