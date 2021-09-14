Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create] do
      resources :photos, only: [:create]
    end
    resources :photos, only: [:show, :index]
    resources :tags, only: [:index, :create, :show]
  end

  root to: 'static_pages#root'
end