class CommentSerializer < ActiveModel::Serializer
  attributes :id, :review
  has_one :recipe

end
