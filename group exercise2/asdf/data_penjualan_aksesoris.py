import pandas as pd
import numpy as np
import random
import matplotlib.pyplot as plt

months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
rows = 12
harga = ["10000", "9500", "9000"]
permintaan_barang1 = np.random.randint(low=50, high=200, size=rows)
permintaan_barang2 = np.random.randint(low=50, high=200, size=rows)
permintaan_barang3 = np.random.randint(low=50, high=200, size=rows)

data = {
    'Stock Barang': np.random.randint(low=30, high=200, size=rows),
    'Permintaan Barang1': permintaan_barang1,
    'Permintaan Barang2': permintaan_barang2,
    'Permintaan Barang3': permintaan_barang3,
    'Permintaan Barang dari Produk Pesaing': np.random.randint(low=80, high=200, size=rows),
    'Bulan': [(months[i]) for i in range(rows)],
    'Harga': [random.choice(harga) for i in range(rows)],
}
df = pd.DataFrame(data)
print(df)


df.to_excel('data_all_produk.xlsx', index=False)

def predict_demand(past_demand, num_months=3):
    x = np.array(range(len(past_demand)))
    y = np.array(past_demand)
    
    # Fit linear regression model to the data
    slope, intercept = np.polyfit(x, y, 1)
    
    # Predict future demand using the trend
    future_x = np.array(range(len(past_demand), len(past_demand) + num_months))
    future_y = intercept + slope * future_x
    
    return future_y

# Example usage
past_demand1 = permintaan_barang1
future_demand1 = predict_demand(past_demand1)
print("Future demand:", future_demand1)

# Plot the data and the trend
x1 = np.array(range(len(past_demand1)))
y1 = np.array(past_demand1)
future_x1 = np.array(range(len(past_demand1), len(past_demand1) + len(future_demand1)))

plt.plot(x1, y1, 'o')
plt.plot(future_x1, future_demand1, 'x')

ffdd1 = pd.DataFrame(future_demand1)



past_demand2 = permintaan_barang2
future_demand2 = predict_demand(past_demand2)
print("Future demand:", future_demand2)

# Plot the data and the trend
x2 = np.array(range(len(past_demand2)))
y2 = np.array(past_demand2)
future_x2 = np.array(range(len(past_demand2), len(past_demand2) + len(future_demand2)))

plt.plot(x2, y2, 'o')
plt.plot(future_x2, future_demand2, 'x')

ffdd2 = pd.DataFrame(future_demand2)



past_demand3 = permintaan_barang3
future_demand3 = predict_demand(past_demand3)
print("Future demand:", future_demand3)

# Plot the data and the trend
x3 = np.array(range(len(past_demand3)))
y3 = np.array(past_demand3)
future_x3 = np.array(range(len(past_demand3), len(past_demand3) + len(future_demand3)))

plt.plot(x3, y3, 'o')
plt.plot(future_x3, future_demand3, 'x')


ffdd3 = pd.DataFrame(future_demand3)

ffdd1.to_excel('data_produk1.xlsx', index=False)
ffdd2.to_excel('data_produk2.xlsx', index=False)
ffdd3.to_excel('data_produk3.xlsx', index=False)