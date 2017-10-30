Rails.application.routes.draw do
  root "static_files#index"

  get '*path', to: 'static_files#index'
end
