class RecipesController < ApplicationController
  
        # def index
          
        #   render json: Recipe.all
        # end
        def index
          
          # render json: Recipe.all
          recipe = Recipe.includes(:user).all
          render json: recipe, include: [:user]
        end

      
      def create
        recipe = @current_user.recipes.create!(recipe_params)
        
        render json: {
          comment: recipe,
          message: ['Recipe added successfully']
          
        },status: :created
      
      end

      def show
        recipes = Recipe.find(params[:id])
        render json: recipes, include: [:user,:comments]
      end

     
      def destroy
        recipe = Recipe.find(params[:id])
        if recipe.user_id == @current_user.id
          recipe.destroy
          
          render json: {
            recipe: recipe,
            message: ['Recipe deleted']
            
          }
        else
          
          render json: { errors: ['!You are not authorized to delete this recipe!' ]}, status: :unauthorized
        end
      end

      
      def update
        recipe = Recipe.find(params[:id])
      if recipe.user_id == @current_user.id
        r1 = Recipe.find_by(id: params[:id])
        if r1
          r1.update(recipe_params)
          # render json: r1, status: :created
          render json: {
            recipe: r1,
            message: ['Recipe updated successfully']
            
          },status: :created
        else
          render json: { errors: ["Recipe not found" ]}, status: :not_found
        end
      else
            render json: { errors: ['!You are not authorized to update this recipe' ]}, status: :unauthorized
          end
      end
      
      
      

     
      
      
      
      private
    
      def recipe_params
        params.permit( :title, :instructions, :cooking_time, :image_url, :category, :user_id)
      end

     

end
