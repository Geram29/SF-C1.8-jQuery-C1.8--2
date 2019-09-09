// Написать метод jQuery.prototype.text(), который возвращает или изменяет текстовое содержимое выбранных элементов.
jQuery.prototype.text = function(text_value){
	if (text_value) {
		this.each(element => element.textContent = text_value)
	}
	return this;
}
