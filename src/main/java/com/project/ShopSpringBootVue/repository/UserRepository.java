package com.project.ShopSpringBootVue.repository;

import com.project.ShopSpringBootVue.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
