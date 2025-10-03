import React from 'react'

const VoucherSummary = () => {
  return (
    <div id="summary" className="p-3 flex justify-end">
        <table>
          <tbody className="font-mono text-sm text-gray-900 dark:text-gray-100">
            <tr className="text-end">
              <td>Total :</td>
              <td>10500</td>
            </tr>
            <tr className="text-end">
              <td>Text(5%) :</td>
              <td>1050</td>
            </tr>
            <tr className="text-end">
              <td>Net Total :</td>
              <td>11550</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default VoucherSummary