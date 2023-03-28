def clean_up_string(str)
    str
      .chars
      .each_with_object([]) { |ch, obj| ch == "#" ? obj.pop : obj << ch }
      .join
  end
  puts clean_up_string("Batman is #w#o#r#s#e# better than Superman")