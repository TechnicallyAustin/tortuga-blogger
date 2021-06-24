class CategoriesController < ApplicationController
    def index
        categories = Category.all 
        ## renders the found cattegories as JSON
        render json: CategorySerializer.new(categories).to_serialized_json
    end

    def show
        category = Category.find_by(id: params[:id])
        ## will render the found category as JSON
        render json: CategorySerializer.new(category).to_serialized_json 
    end
    
end
