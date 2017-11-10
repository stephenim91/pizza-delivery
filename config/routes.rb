Rails.application.routes.draw do
  root "static_files#index"

  post '/users' => 'users#create'

  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  resources :users, only: [:new, :create]
  resources :sessions, only: [:create, :destroy]

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
      resources :addresses, only: [:index, :show, :create]
      resources :orders, only: [:index, :show, :create]
    end
  end

  get '*path', to: 'static_files#index'
end
