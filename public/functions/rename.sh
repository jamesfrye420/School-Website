a=1
for i in *.jpeg; do
  new=$(printf "%04d.jpeg" "$a") #04 pad to length of 4
  mv -i -- "$i" "$new"
  let a=a+1
done
