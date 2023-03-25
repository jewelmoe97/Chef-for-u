class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :instructions, :cooking_time, :image_url, :category
  has_many :users
 
  has_many :comments
end
