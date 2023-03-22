class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :instructions, :cooking_time, :image_url
  has_one :user
 
  has_many :comments
end
