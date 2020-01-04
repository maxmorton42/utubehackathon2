class Api::VideoStatusController < ApplicationController
  def index
    render json: User.liked(current_user.video_status)
  end
end