class CommentsController < ApplicationController
    def index
          
        render json: Comment.all
      end 
          
     
    def create
       comment = @current_user.comments.create!(comment_params)
        render json: comment, status: :created
      end

      def destroy
        comment = Comment.find(params[:id])
        if comment.user_id == @current_user.id
         comment.destroy
          render json: { message: 'Comment deleted' }
        else
          render json: { error: 'You are not authorized to delete this comment' }, status: :unauthorized
        end
      end


      private
    
      def comment_params
        params.permit( :user_id, :recipe_id, :review)
      end
end
