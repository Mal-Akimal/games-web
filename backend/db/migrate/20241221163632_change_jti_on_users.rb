class ChangeJtiOnUsers < ActiveRecord::Migration[6.1]
  def change
    # Update the 'jti' column to have null: false
    change_column :users, :jti, :string, null: false

    # Add a unique index on 'jti' if it doesn't already exist
    unless index_exists?(:users, :jti, unique: true)
      add_index :users, :jti, unique: true
    end
  end
end
