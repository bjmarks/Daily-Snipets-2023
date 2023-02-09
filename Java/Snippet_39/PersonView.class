package com.snippets;
@EntityView(Person.class)
public interface PersonView {
    @IdMapping
    Integer getId();
    @Mapping("CONCAT(firstName,' ',lastName)")
    String getName();
}