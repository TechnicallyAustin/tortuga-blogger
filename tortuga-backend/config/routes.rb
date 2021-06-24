Rails.application.routes.draw do
  resources :users
  ## route for testing first method
  get '/test', to: 'users#test'
end
