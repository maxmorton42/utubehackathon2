class Api::VideoStatusController < ApplicationController
  def index
    render json: User.liked(current_user.video_status)
  end

  def update
    current_user.liked_videos << params[:id].to_i
    current_user.save
  end
  
end