Rails.application.routes.draw do
  resources :scores
  Rails.application.routes.draw do
    namespace :api, {format: 'json'} do
      namespace :v1 do
        namespace :tests do
          get "/" , :action => "index"
        end
      end
    end  
  end
end
