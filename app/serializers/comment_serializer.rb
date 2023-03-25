class CommentSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :recipe_id, :user, :recipe
  has_one :recipe
has_one :user
end
