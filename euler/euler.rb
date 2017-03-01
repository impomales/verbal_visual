#!/usr/bin/ruby

num = 999;
sum = 0

while num > 0 do
    if (num % 3) == 0  || (num % 5) == 0 then
        sum += num;
    end
    num -= 1
end

puts sum