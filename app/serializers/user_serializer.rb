class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url

  has_many :recipes
  has_many :comments
end
