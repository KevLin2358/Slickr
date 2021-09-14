json.extract! photo, :id, :title, :description, :uploader_id, :file
if photo.file.attached?
  json.photoURL url_for(photo.file)
end