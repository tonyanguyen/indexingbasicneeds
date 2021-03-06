# frozen_string_literal: true

class ResourcePolicy < ApplicationPolicy
  def create?
    user.is_admin
  end

  def update?
    user.is_admin
  end

  def destroy? 
    user.is_admin
  end
end
