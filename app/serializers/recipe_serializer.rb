class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :instructions, :cooking_time, :image_url, :category, :user_id, :user
  # has_many :users
  belongs_to :user
 
  has_many :comments
end
