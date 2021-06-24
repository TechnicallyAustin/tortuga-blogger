Rails.application.routes.draw do
  resources :categories
  resources :comments
  get '/test', to: 'category#index'
  ## route for testing first method
end
