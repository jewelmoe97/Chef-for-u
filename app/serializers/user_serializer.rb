class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url

  # has_many :recipes
  has_many :comments

  
  has_many :recipes, through: :comments
end
