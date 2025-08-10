rails g mongoid:migration AddAgeToUsers
class AddAgeToUsers
  include Mongoid::Migration

  def self.up
    User.create_indexes # creating indexes
  end

  def self.down
    # rollback logic, if needed
  end
end
