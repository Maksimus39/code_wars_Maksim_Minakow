// Мы реализовали функцию wrap(value), которая берет значение произвольного типа и заворачивает его в новый объект JavaScript или Python Dict, устанавливая ключ «value» на новом объекте или Dict на переданное значение.
//
// Так, например, если мы выполним следующий код:
//
// Wrapper_obj = wrap("my_wrapper_string");
//
// # Wrapper_obj должен быть {"value":"my_wrapped_string"}
//
// Затем мы ожидаем, что следующее утверждение будет верным:
//
// Wrapper_obj["значение"] == "my_wrapped_string"
//
// К сожалению, код не работает так, как задумано. Пожалуйста, исправьте код так, чтобы он вел себя так, как указано.


function wrap(value) {
    return {
        value:value
    };
}