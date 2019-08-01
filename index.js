//function submission 
    $(function() {
    //first to accept items in the shoppping list:
        $('#js-shopping-list-form').submit( function(event) {
          event.preventDefault();
          const newItem = $(this).find('#shopping-list-entry');
          if( newItem.val() === ``) {
            return;
          }
          $('.shopping-list').append(`<li><span class="shopping-item">${newItem.val()}</span>
              <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                  <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                  <span class="button-label">delete</span>
                </button>
              </div></li>`);
          newItem.val(``);
        });
      
    //checking and unchecking items
        $('.shopping-list').on('click', '.shopping-item-toggle', function() {
          $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        });
      
    //deleting items
        $('.shopping-list').on('click', '.shopping-item-delete', function() {
          $(this).closest('li').remove();
        });
      });
      