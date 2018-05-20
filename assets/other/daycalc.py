import datetime, sys

def main(argv):
  start = None
  end = None
  diff = 0
  for index, arg in enumerate(argv):
    if (arg == "-s" or arg == "--start"):
      start = datetime.datetime.strptime(argv[index + 1], "%Y-%m-%d")
    elif (arg == "-e" or arg == "--end"):
      end = datetime.datetime.strptime(argv[index + 1], "%Y-%m-%d")
    elif (arg == "-d" or arg == "--diff"):
      diff = int(argv[index + 1])

  if (start != None and end != None):
    print((end - start).days)
  elif (start != None and diff != 0):
    print(start + datetime.timedelta(diff))
  elif (end != None and diff != 0):
    print(end - datetime.timedelta(diff))
  else:
    print('''
  Welcome to daycalc
  All date formats must be ISO8601, YYYY-MM-DD

  -s, --start     set start date
  -e, --end       set end date
  -d, --diff      set difference

  Setting a start and end will return the number of days between the two (exclusive)
  Setting a start and a diff will give you the date [d] days after the start date
  Setting an end and a diff will give you the date [d] days before the end date
''')

  pass


if __name__ == '__main__':
  main(sys.argv)