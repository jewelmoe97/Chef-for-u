class CommentsController < ApplicationController

    def create
       comment = @current_user.comments.create!(comment_params)
        render json: comment, status: :created
      end
      private
    
      def comment_params
        params.permit( :user_id, :recipe_id, :review)
      end
end
