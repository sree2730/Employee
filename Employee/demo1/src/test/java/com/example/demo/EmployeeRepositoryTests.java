package com.example.demo;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@DataMongoTest
public class EmployeeRepositoryTests {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Test
    public void testSaveEmployee() {
        Employee employee = new Employee();
        employee.setName("John Doe");
        employee.setDepartment("IT");
        employee.setEmail("john.doe@example.com");

        Employee savedEmployee = employeeRepository.save(employee);

        assertThat(savedEmployee.getId()).isNotNull();
        assertThat(savedEmployee.getName()).isEqualTo("John Doe");
        assertThat(savedEmployee.getDepartment()).isEqualTo("IT");
        assertThat(savedEmployee.getEmail()).isEqualTo("john.doe@example.com");
    }
}
