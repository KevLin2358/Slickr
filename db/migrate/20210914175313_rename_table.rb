class RenameTable < ActiveRecord::Migration[6.1]
  def change
    rename_table :photo_tags, :phototags
  end
end
