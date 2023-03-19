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

      # def destroy
      #   item = Recipe.find(params[:id])
      #   item.destroy
      #   head :no_content
      # end

      def destroy
        recipe = Recipe.find(params[:id])
        if recipe.user_id == @current_user.id
          recipe.destroy
          render json: { message: 'Recipe deleted' }
        else
          render json: { error: 'You are not authorized to delete this recipe' }, status: :unauthorized
        end
      end
      
      
      private
    
      def recipe_params
        params.permit( :title, :instructions, :cooking_time, :image_url, :category)
      end

     

end
