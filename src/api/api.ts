/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 
 * @param Entity Wrapper for native Db API
 * @returns 
 */

export const dBApi = (Entity: any) => {
  // { where: { email: email.toLowerCase() }, }
  const findOne = async (options: any) => {
    return await Entity.findOne({ where: options });
  };

  const deleteOne = async (row: any) => {
    return await Entity.remove(row);
  };

  // { "name": "", "email": "", "password": "[encrypted]" }
  const save = async (userObj: any) => {
    return await Entity.save(userObj);
  };

  const findById = async (options: any) => {
    return await Entity.findOne({ where: { _id: options.id } });
  };

  const findOneAndUpdate = async (filter: any, update: any) => {
    const user = await Entity.findOne({ where: filter });
    await Entity.update({ _id: user._id }, update);
  };

  return {
    findById,
    findOne,
    findOneAndUpdate,
    deleteOne,
    save
  };
};