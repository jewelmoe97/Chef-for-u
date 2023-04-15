class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :instructions, :cooking_time, :image_url, :category, :user_id, :user, :comments

  belongs_to :user
   has_many :comments

    # has_many :users, through: :comments
end
