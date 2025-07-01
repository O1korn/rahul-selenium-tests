describe('Selenium Practice Shopping Flow', () => {
  it('should add and remove products from cart', () => {
    // 1. Перейти на сайт
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    // 2. Ввести “ro” у пошук
    cy.get('.search-keyword').type('ro')

    // 3. Зачекати на результати (можна налаштувати за потребою)
    cy.wait(1000)

    // 4. Обійти всі знайдені продукти
    cy.get('.products').find('.product').each(($el, index, $list) => {
      const name = $el.find('.product-name').text()

      if (name.includes('Carrot')) {
        // Встановити кількість 5 у поле вводу
        cy.wrap($el).find('input.quantity').clear().type('5')
        // Додати Carrot до корзини
        cy.wrap($el).contains('ADD TO CART').click()
      }

      if (name.includes('Mushroom')) {
        // Збільшити кількість до 3 (натиснути + двічі)
        cy.wrap($el).find('.increment').click().click()
        // Додати Mushroom до корзини
        cy.wrap($el).contains('ADD TO CART').click()
      }
    })

    // 7. Відкрити корзину
    cy.get('.cart-icon > img').click()

    // 8. Видалити Carrot з корзини
    cy.get('.cart-item')
      .contains('Carrot')
      .parents('.cart-item')
      .find('.product-remove')
      .click()

    // Перевірка, що Carrot видалено
    cy.get('.cart-item').should('not.contain', 'Carrot')

  })
})
