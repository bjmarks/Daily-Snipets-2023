package com.snippets;
@Transactional(readOnly = true)
public interface  PersonViewRepository extends EntityViewRepository<PersonView, Integer> {
    PersonView findByAgeGreaterThan(int age);
}