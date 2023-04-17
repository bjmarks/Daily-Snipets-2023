package com.deskmc.deskmc.Repositories;

import com.deskmc.deskmc.Modals.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositories extends JpaRepository<User, Long> {
}
