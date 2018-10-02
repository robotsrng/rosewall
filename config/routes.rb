Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #

  get '/calculator', to: 'pages#calculator'
  get '/products', to: 'pages#products'
  get '/contact', to: 'pages#contact'
  get '/about', to: 'pages#about'
  root 'pages#index'
end
