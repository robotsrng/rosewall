Rails.application.routes.draw do
  resources :contacts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #
  get '/delivery', to: 'pages#delivery'
  get '/calculator', to: 'pages#calculator'
  get '/products', to: 'pages#products'
  get '/contact', to: 'contacts#new'
  get '/about', to: 'pages#about'
  root 'pages#index'
end
