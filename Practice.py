class Car:
    def __init__(self, make, model, year):
        # Encapsulating the attributes
        self._make = make   # Protected attribute
        self._model = model # Protected attribute
        self.__year = year  # Private attribute

    # Getter for the private attribute '__year'
    def get_year(self):
        return self.__year

    # Setter for the private attribute '__year'
    def set_year(self, year):
        if year > 2000:  # Add some validation
            self.__year = year
        else:
            print("Invalid year. Year must be greater than 2000.")

    # Method to display car info
    def display_info(self):
        print(f"Car Make: {self._make}")
        print(f"Car Model: {self._model}")
        print(f"Car Year: {self.get_year()}")

# Creating an instance of the Car class
car1 = Car("Toyota", "Corolla", 2021)

# Accessing the public method to display information
car1.display_info()

# Accessing the private attribute (this will cause an error)
# print(car1.__year)  # Uncommenting this will raise an AttributeError

# Correct way to access and modify the private attribute
print("Initial Year:", car1.get_year())

# Using setter to modify the private attribute
car1.set_year(2025)
print("Updated Year:", car1.get_year())

# Trying to set an invalid year
car1.set_year(1999)  # This will print an error message
