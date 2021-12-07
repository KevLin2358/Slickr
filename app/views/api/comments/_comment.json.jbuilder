json.extract! comment, :id, :commenter_id, :photo_id, :body
json.extract! @comment.commenter, :username