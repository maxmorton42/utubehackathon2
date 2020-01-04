Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

    namespace :api do
      resources :video_status, only: [:index, :update]
      resources :videos, only: [:index, :update, :create, :destroy, :show] do
        resources :comments
      end
    end
end


