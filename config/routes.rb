Rails.application.routes.draw do
  root "static_files#index"

  namespace :api do
    namespace :v1 do
      resources :addresses, only: [:index, :show, :create]
    end
  end

  get '*path', to: 'static_files#index'
end
