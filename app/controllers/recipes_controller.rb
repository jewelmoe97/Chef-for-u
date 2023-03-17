class RecipesController < ApplicationController
   
     
        def index
          
          render json: Recipe.all
        end
      
      def create
        recipe = @current_user.recipes.create!(recipe_params)
        render json: recipe, status: :created
      end

      def shows
        recipes = Recipe.find(params[:id])
        render json: recipes
      end

      def destroy
        item = Recipe.find(params[:id])
        item.destroy
        head :no_content
      end
      
      private
    
      def recipe_params
        params.permit( :title, :instructions, :cooking_time, :image_url, :category)
      end
end
